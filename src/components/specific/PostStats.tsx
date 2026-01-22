import { TbArrowBigUp, TbMessageCircle } from 'react-icons/tb';
import type { Post } from '../../types';

interface Props {
    ups: Post['ups'];
    comments: Post['num_comments'];
}

export const PostStats = ({ ups, comments }: Props) => {
    return (
        <div className="flex gap-4 rounded-full bg-surface-400 px-2">
            <span className="flex items-center">
                <TbArrowBigUp size={20} />
                {ups}
            </span>
            <span className="flex items-center">
                <TbMessageCircle size={20} />
                {comments}
            </span>
        </div>
    );
};
