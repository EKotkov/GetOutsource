import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownViewer (props) {
    const [content, setContent] = useState("");
    let fileName = props.fileName;

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(`/markdown/${fileName}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error("Error loading markdown file:", error);
            }
        };

        if (fileName) {
            fetchMarkdown();
        }
    }, [fileName]);

    return (
        <div >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownViewer;
