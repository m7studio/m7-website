import Head from 'next/head';
import * as React from 'react';

import HomeSection from '@/components/HomeSection/HomeSection';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Head>
        <title>M7 STUDIO - a digital strategy and software studio, </title>
      </Head>
      <HomeSection></HomeSection>
    </>
  );
}
