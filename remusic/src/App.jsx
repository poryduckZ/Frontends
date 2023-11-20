import icon from "../assets/icon.svg";

export default function Component() {
  return (
    <section key="1" className="flex h-screen flex-col bg-black text-white">
      <nav className="flex items-center justify-between bg-white px-6 py-4 text-black">
        <a className="flex items-center" href="#">
          <IconMusic className="mr-2 h-6 w-6 text-black" />
          <span className="text-xl font-semibold">REMUSIC</span>
        </a>
        <div className="space-x-4">
          <a className="hover:text-black" href="#">
            Home
          </a>
          <a className="hover:text-black" href="#">
            Songs
          </a>
          <a className="hover:text-black" href="#">
            Artists
          </a>
          <a className="hover:text-black" href="#">
            Albums
          </a>
          <a className="hover:text-black" href="#">
            Playlists
          </a>
        </div>
      </nav>
      <main className="flex-grow overflow-y-auto bg-white px-6 py-4 text-black">
        <div className="divide-y divide-gray-500">
          <div className="py-2">
            <h3 className="text-lg font-semibold">Song Title 1</h3>
            <p>Artist 1 - Album 1</p>
            <p>3:15</p>
          </div>
          <div className="py-2">
            <h3 className="text-lg font-semibold">Song Title 2</h3>
            <p>Artist 2 - Album 2</p>
            <p>2:45</p>
          </div>
          <div className="py-2">
            <h3 className="text-lg font-semibold">Song Title 3</h3>
            <p>Artist 3 - Album 3</p>
            <p>4:22</p>
          </div>
        </div>
      </main>
      <footer className="flex inline-flex items-center justify-between bg-gray-100 px-6 py-4 text-black">
        <div className="flex space-x-4">
          <a className="hover:text-black" href="#">
            <IconFacebook className="h-6 w-6" />
          </a>
          <a className="hover:text-black" href="#">
            <IconTwitter className="h-6 w-6" />
          </a>
          <a className="hover:text-black" href="#">
            <IconInstagram className="h-6 w-6" />
          </a>
        </div>
        <p>© 2023 REMUSIC</p>
      </footer>
    </section>
  );
}

function IconFacebook(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconMusic(props) {
  return <img src={icon} {...props} />;
}

function IconTwitter(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
