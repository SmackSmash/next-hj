'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleClick = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (mounted) {
    return (
      <div className='ml-auto flex items-center'>
        <label htmlFor='dark-mode'>
          {resolvedTheme === 'dark' ? <FiMoon className='size-5' /> : <FiSun className='size-5' />}
        </label>
        <Switch id='dark-mode' className='ml-4' onClick={handleClick} />
      </div>
    );
  }
}
