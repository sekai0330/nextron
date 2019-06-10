import React from 'react';
import Head from 'next/head';
import { BasicCard } from '../components/BasicCard';
import { TitleCard } from '../components/TitleCard';
import { HoverableCard } from '../components/HoverableCard';
import Link from 'next/link';

export default () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-emotion)</title>
      </Head>
      <div>
        <TitleCard>Nextron with Emotion</TitleCard>
        <BasicCard>
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </BasicCard>
        <HoverableCard>
          With <code>:hover</code>.
        </HoverableCard>
      </div>
    </React.Fragment>
  );
};
