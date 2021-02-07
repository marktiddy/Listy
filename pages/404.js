import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </p>
      <Image src="/dog.jpg" width={129} height={88} />
    </div>
  );
};
export default NotFound;
