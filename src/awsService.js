// src/awsService.js
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.VUE_APP_AWS_REGION,
});

const s3 = new AWS.S3();

export const listFiles = async (bucketName) => {
    const params = {
        Bucket: bucketName,
    };
    try {
        const data = await s3.listObjectsV2(params).promise();
        return parseS3Keys(data.Contents);
    } catch (err) {
        console.error('Error listing files: ', err);
        throw err;
    }
};

export const downloadFile = async (bucketName, key) => {
    const params = {
        Bucket: bucketName,
        Key: key,
    };
    try {
        const data = await s3.getObject(params).promise();
        const url = URL.createObjectURL(new Blob([data.Body]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', key);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (err) {
        console.error('Error downloading file: ', err);
        throw err;
    }
};

const parseS3Keys = (keys) => {
    const fileTree = {};

    keys.forEach(({ Key, LastModified }) => {
        const parts = Key.split('/');
        let current = fileTree;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (i === parts.length - 1) {
                current[part] = { lastModified: LastModified };
            } else {
                if (!current[part]) {
                    current[part] = {};
                }
                current = current[part];
            }
        }
    });

    const sortTree = (tree) => {
        const sortedTree = {};
        const folders = Object.keys(tree).filter(key => typeof tree[key] === 'object' && !tree[key].lastModified).sort();
        const files = Object.keys(tree).filter(key => tree[key].lastModified).sort();

        folders.forEach(folder => {
            sortedTree[folder] = sortTree(tree[folder]);
        });
        files.forEach(file => {
            sortedTree[file] = tree[file];
        });

        return sortedTree;
    };

    return sortTree(fileTree);
};

export default s3;
