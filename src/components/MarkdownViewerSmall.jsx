import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

const MarkdownViewerSmall = ({ fileName, className, previewLength = 100 }) => {
    const [content, setContent] = useState("");
    const [fullContent, setFullContent] = useState(false);

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

    const previewText = content.slice(0, previewLength);

    return (
        <div className={`markdown-viewer ${className}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{
                fullContent ? content : previewText
            }</ReactMarkdown>
            {content.length > previewLength && (
                <>
                <div>
                    {!fullContent ? (
                        <a href="#" onClick={(e) => { e.preventDefault(); setFullContent(true); }}>I want to see more</a>
                    ) : (
                            <a href="#" onClick={(e) => { e.preventDefault(); setFullContent(false); }}>I want to see less</a>
                    )}
                </div>
                </>
            )}

            <Link to={`../page/${fileName}`} >I want to see more on a separate page</Link>
        </div>
    );
};

export default MarkdownViewerSmall;
