import type {ActionFunctionArgs, LoaderFunctionArgs} from "@remix-run/node";
import {json, redirect} from "@remix-run/node";
import invariant from "tiny-invariant";

import {deleteContact, getContact} from "../../data";

export const loader = async ({params}: LoaderFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const contact = await getContact(params.contactId);
  if (! contact) {
    throw new Response("Not Found", {status: 404});
  }
  return json({contact});
};

export const action = async ({
  params,
}: ActionFunctionArgs) => {
  invariant(params.contactId, "contactId パラメータがありません");
  await deleteContact(params.contactId);
  return redirect("/");
};

export default function DeleteContact() {
  return (
    <h1>削除しました</h1>
  );
}
