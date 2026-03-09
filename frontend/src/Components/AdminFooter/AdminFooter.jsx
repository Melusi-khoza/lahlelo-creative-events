export default function AdminFooter() {
  return (
    <>
      <footer className="admin-footer">
        <hr></hr>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Lahlelo Creative Events.<br></br>{" "}
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
