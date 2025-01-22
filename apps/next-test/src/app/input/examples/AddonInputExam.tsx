'use client';

import React from 'react';

import SearchIcon from '@/icons/SearchIcon';

import AddonInput from '../components/AddonInput';

export default function AddonInputExam(): React.JSX.Element {
  return (
    <>
      <div>Left/Right Addon</div>
      <div className="flex flex-row gap-2">
        <div className="flex w-full flex-col gap-2">
          <AddonInput leftAddon="http://" rightAddon=".com" />
          <div>
            With clearable
            <AddonInput leftAddon="http://" rightAddon=".com" />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <AddonInput
            leftAddon={
              <button style={{ border: 0, height: 25 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="1em"
                  height="1em"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            }
            rightAddon={
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="20px"
                  height="20px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            }
          />
          <div>
            With clearable
            <AddonInput
              leftAddon={<div>Search</div>}
              rightAddon={
                <button style={{ border: 0, height: 25 }}>
                  <SearchIcon />
                </button>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
