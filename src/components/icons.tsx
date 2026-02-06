import type { SVGProps } from "react";

export const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 12.48V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6.52" />
    <path d="M8 19v-5.08" />
    <path d="M16 19v-5.08" />
    <path d="M12 19v-7.6" />
    <path d="M12 4L4 8.71v.68l8 4.63 8-4.63v-.68L12 4z" />
    <path d="M4.6 9.04L12 13.37l7.4-4.33" />
    <path d="M19.4 9.04L12 4.71" />
  </svg>
);


export const PythonIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M15 11.25a3.75 3.75 0 0 1-3.75 3.75H8.25V18.75h3a3.75 3.75 0 0 1 0 7.5H3.75V22.5h7.5a7.5 7.5 0 0 0 0-15H8.25V3.75h3.75A3.75 3.75 0 0 1 15 7.5v3.75z" fill="#306998" />
        <path d="M9 12.75A3.75 3.75 0 0 1 12.75 9h3V5.25h-3a3.75 3.75 0 0 1 0-7.5h7.5v3.75h-7.5a7.5 7.5 0 0 0 0 15h3v3.75h-3.75A3.75 3.75 0 0 1 9 16.5v-3.75z" fill="#FFD43B" />
    </svg>
);

export const ExpressIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        width="24"
        height="24"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fill="currentColor" d="M36.15 33.31h47.37v-7.81H28.3v58.31h7.85zm55.7 3.9h-47.4v7.82h47.4zm-47.4 11.72h47.37v7.81h-47.4zm47.37 11.72h-47.4v7.81h47.4z"/>
    </svg>
)

export const MongoDbIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M12,2.25C6.61,2.25,2.25,6.61,2.25,12c0,5.39,4.36,9.75,9.75,9.75c5.39,0,9.75-4.36,9.75-9.75 C21.75,6.61,17.39,2.25,12,2.25z M12,19.5c-3.14,0-5.83-2.03-6.68-4.86c-0.12-0.42,0.18-0.85,0.61-0.85h12.14 c0.43,0,0.73,0.43,0.61,0.85C17.83,17.47,15.14,19.5,12,19.5z M15.12,12.75H8.88c-0.43,0-0.73-0.43-0.61-0.85 C8.68,10.23,10.19,9,12,9s3.32,1.23,3.73,2.9C15.85,12.32,15.55,12.75,15.12,12.75z"/>
    </svg>
)

export const MySqlIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        width="24"
        height="24"
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M12.445 15.148c-2.88.39-4.22.42-5.46.42-3.9 0-4.98-2.31-4.98-5.71s1.35-5.5 5.25-5.5c1.23 0 2.52.09 5.2.48V0H0v18.42c0 3.66 2.16 5.58 6.96 5.58 4.77 0 7.02-1.92 7.02-5.58v-3.3zm2.535 6.012c-.42.06-1.53.18-1.53.18V3.25c0-.03.03-.06.06-.06s.06.03.06.06v8.46c2.82-.12 4.14-.15 5.37-.15 3.9 0 4.98 2.31 4.98 5.71s-1.35 5.5-5.25 5.5c-1.23 0-2.52-.09-5.2-.48v-1.11zm1.53-7.53c0-2.91 1.5-4.59 4.17-4.59 2.58 0 4.02 1.62 4.02 4.59s-1.5 4.59-4.17 4.59c-2.58 0-4.02-1.68-4.02-4.59z" fill="currentColor"/>
    </svg>
)

export const HtmlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.613 0l1.815 20.35L12 24l8.572-3.65L22.387 0H1.613z" fill="#E34F26"/>
    <path d="M12 21.802V2.138h8.56l-1.556 17.458L12 21.802z" fill="#F16529"/>
    <path d="M12 8.375h4.44l.39-4.237H12V2.138h8.928l-.964 10.835H12V8.375zm0 8.013h4.03l.358 4.01L12 21.803v-2.784l2.45-.65.26-2.91H12v-2.648z" fill="#fff"/>
    <path d="M12 8.375v2.648H8.388l-.32-3.59h-2.1L6.452 14.8h5.548v-2.647H8.768l.18-2.02h3.052z" fill="#ebebeb"/>
  </svg>
)

export const CssIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.613 0l1.815 20.35L12 24l8.572-3.65L22.387 0H1.613z" fill="#1572B6"/>
    <path d="M12 21.802V2.138h8.56l-1.556 17.458L12 21.802z" fill="#33A9DC"/>
    <path d="M12 8.375v2.648h4.07l-.37 4.265H12v2.647h4.888l.36-4.01L19.4 11.23l.48-5.41H12V2.138h8.928L20.3 19.348 12 21.803v-2.784l2.45-.65.26-2.91H12v-2.648h4.44l.39-4.237H12z" fill="#fff"/>
    <path d="M12 8.375H8.388l-.32-3.59H12V2.138H5.972l.483 5.41h5.545v2.648H8.768l.18 2.02h3.052v2.647H7.112l-.484 5.41L12 21.803v-2.784l-2.45-.65-.26-2.91h2.24l-.18 2.02H8.768l-.48-5.41h6.27v-2.648H8.388z" fill="#ebebeb"/>
  </svg>
);

export const TypescriptIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        width="24"
        height="24"
        viewBox="0 0 128 128" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fill="#007ACC" d="M0 0h128v128H0z"/>
        <path fill="#FFF" d="M23.53 92.48V35.6h17.44v56.88zm81.43-39c0-8.2-3.9-15.3-12.87-15.3-8.8 0-12.8 6.72-12.8 15.4v38.9h17.37V54.49c0-3.3 1.25-5.32 3.84-5.32 2.5 0 3.66 2.03 3.66 5.32v38h17.37V54.49c0-1.4-.07-2.73-.2-4zM62.63 35.6H45.2v56.88h17.43v-9.75H52.4V65.8h9.1v-9.74h-9.1V45.34h10.23z"/>
    </svg>
)

export const TailwindIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.001 4.5C7.50116 4.5 4.50116 7.5 4.50116 12C4.50116 16.5 7.50116 19.5 12.001 19.5C16.5012 19.5 19.5012 16.5 19.5012 12C19.5012 7.5 16.5012 4.5 12.001 4.5Z" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.25122 12C8.25122 14.0711 9.92125 15.75 12.001 15.75C14.0711 15.75 15.751 14.08 15.751 12C15.751 9.92 14.081 10.5 12.001 10.5C9.92125 10.5 8.25122 9.92893 8.25122 12Z" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

export const FirebaseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path d="M6.289 20.627l1.78-10.87-4.57 3.25z" fill="#f57c00"/>
        <path d="M12.712 1.487l-6.423 19.14 4.195-12.275z" fill="#ffca28"/>
        <path d="M6.289 20.627l10.21-12.75-5.783 14.185z" fill="#f57c00"/>
        <path d="M16.499 7.877l-5.96 14.186 5.96-14.186z" opacity=".6"/>
        <path d="M18.278 17.377L3.5 6.627l2.789 14z" fill="#ffa000"/>
    </svg>
)
