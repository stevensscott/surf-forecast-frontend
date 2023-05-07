import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
export function Footer() {
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-1">Scott Stevens</div>
      <div className="text-center">
        <SocialIcon url="https://www.linkedin.com/in/stevensscott29/" target="_blank" />
      </div>
    </footer>
  );
}
