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
        text="Easily search through your notes"
      />

      <FeatureCard
        icon={<TbDatabaseOff />}
        text="No need to worry about external servers - your notes are stored securely on your device"
      />
    </div>
  );
}
export default Features;
