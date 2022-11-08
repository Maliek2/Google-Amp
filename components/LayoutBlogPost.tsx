// components/LayoutBlogPost.tsx

import dynamic from 'next/dynamic';
const Adsense = dynamic(() => import('./Adsense'), { ssr: false });

export default function LayoutBlogPost({children}: {children: any}) {
  return (
    <div>
      {children}
      <Adsense />
    </div>
  );
}
