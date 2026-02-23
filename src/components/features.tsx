import { TbDatabaseOff, TbListSearch, TbMarkdown } from 'react-icons/tb';

import FeatureCard from './feature-card';

function Features() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={<TbMarkdown />}
        text="Easily format your notes with markdown"
      />

      <FeatureCard
        icon={<TbListSearch />}
        text="Instantly search your notes"
      />

      <FeatureCard
        icon={<TbDatabaseOff />}
        text="No external servers - your notes are stored in your browser"
      />
    </div>
  );
}

export default Features;
