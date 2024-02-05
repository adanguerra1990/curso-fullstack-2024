import React from 'react';

const Notification = ({ notification }) => {
    if (!notification.message) {
        return null;
    }

    const styleClass = notification.type === 'success' ? 'success' : 'error';

    return (
        <div className={`notification ${styleClass}`}>
            {notification.message}
        </div>
    );
};

export default Notification;
