import { TbDatabaseOff, TbListSearch, TbMarkdown } from 'react-icons/tb';

import FeatureCard from './FeatureCard';

function Features() {
  return (
    <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 place-items-center">
      <FeatureCard
        icon={<TbMarkdown />}
        text="Easily format your notes with markdown"
      />

      <FeatureCard
        icon={<TbListSearch />}
        text="Quickly search and organize your notes by date"
      />

      <FeatureCard
        icon={<TbDatabaseOff />}
        text="No external servers - your notes are stored in your browser"
      />
    </div>
  );
}
export default Features;
