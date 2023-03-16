export default function UnreadBadge({ unread }) {

    return (
        <div className="h-full mt-6">
            <div className="flex items-center justify-center h-6 w-6 bg-unread-light dark:bg-unread-dark text-white text-sm rounded-full">
                {unread}
            </div>
        </div>
    );
}