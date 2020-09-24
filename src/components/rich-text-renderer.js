import React from 'react';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from './rich-text-renderer.module.css'

const Bold = ({ children }) => <span className={styles.bold}> {children}</span>;
const Text = ({ children }) => <p className={styles.text}>{children}</p>;

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node,children) => <Text className={styles.text}>{children}</Text>,
        [BLOCKS.EMBEDDED_ASSET]: (node,children) => <img className={styles.bodyImage} alt={node.data.target.fields.title["en-US"]} src={`https:${node.data.target.fields.file["en-US"].url}`} />
    }
};


export default ({ node }) =>   documentToReactComponents(node.json,options);
