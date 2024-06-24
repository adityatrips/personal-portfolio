import { useEffect } from "react";

interface MetadataProps {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
}

const useMetadata = ({
  title,
  description,
  keywords,
  author,
  url,
}: MetadataProps) => {
  useEffect(() => {
    document.title = title;

    // Set or create meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "description");
      newMeta.setAttribute("content", description);
      document.head.appendChild(newMeta);
    }

    // Set or create meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords.join(", "));
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "keywords");
      newMeta.setAttribute("content", keywords.join(", "));
      document.head.appendChild(newMeta);
    }

    // Set or create meta author
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.setAttribute("content", author);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "author");
      newMeta.setAttribute("content", author);
      document.head.appendChild(newMeta);
    }

    // Set or create meta URL
    const metaUrl = document.querySelector('meta[name="url"]');
    if (metaUrl) {
      metaUrl.setAttribute("content", url);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "url");
      newMeta.setAttribute("content", url);
      document.head.appendChild(newMeta);
    }
  }, [title, description, keywords, author, url]);
};

export default useMetadata;
