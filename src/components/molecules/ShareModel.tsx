import React from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
  content: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, topic, content }) => {
  if (!isOpen) return null;

  const shareToFacebook = () => {
    const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(content)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareToEmail = () => {
    const subject = encodeURIComponent(topic);
    const body = encodeURIComponent(content);
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_self');
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <h2 className="text-xl mb-4">Share this post</h2>
        <button
          onClick={shareToFacebook}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Share to Twitter
        </button>
        <button
          onClick={shareToEmail}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Share via Email
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ShareModal