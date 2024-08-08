import {Outlet} from "@remix-run/react";

export default function Index() {
  return (
    <p id="index-page">
      これはRemixのデモです。
      <br />
      <a href="https://remix.run" target="_blank">remix.runのドキュメント</a>をご覧ください。
    </p>
  );
}
