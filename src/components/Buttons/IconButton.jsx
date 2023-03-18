import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ icon, className, title }) {

    return (
        <FontAwesomeIcon icon={icon} className={className} title={title} />
    );
}