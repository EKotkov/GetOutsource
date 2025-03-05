import { useParams } from 'react-router-dom';
import MarkdownViewer from '../components/MarkdownViewer';

function ContentPage() {
    const { id } = useParams();
    return (
        <MarkdownViewer fileName={ id} />
    );
}

export default ContentPage;