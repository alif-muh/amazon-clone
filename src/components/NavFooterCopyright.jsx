import React from 'react';

const NavFooterCopyright = () => {
  return (
    <div className="flex items-center flex-col  bg-amazonclone text-white pb-8">
      <ul className="flex gap-4 text-xs">
        <li>Conditions of Use</li>
        <li>Privacy Notice</li>
        <li>Your Ads Privacy Choices</li>
      </ul>
      <div className="text-xs">&copy; 1996-2023, Amazon.com, Inc. or its affiliates</div>
    </div>
  );
};

export default NavFooterCopyright;
