import { TbDatabaseOff, TbListSearch, TbMarkdown } from 'react-icons/tb';

import FeatureCard from './FeatureCard';

function Features() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-2 lg:grid-cols-3">
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
