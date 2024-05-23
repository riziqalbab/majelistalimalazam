import Container from "@/components/container";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}.
        All rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Di desain dan dibuat oleh{" "}
          {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR Purchase PRO version for commercial license.  */}
          <a
            href="https://www.gendingsoft.my.id/"
            rel="noopener"
            className="underline"
            target="_blank">
            GENDINGSOFT DEVELOPMENT
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/GENDING-SOFT"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
      </div>

      <Backlink />
    </Container>
  );
}

const Backlink = () => {
  return <div></div>;
};
