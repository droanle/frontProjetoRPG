/**
 * @module Connection
 */
import Connection from "../Cennection";
import access from "../settings/access";

export default (login: string, pass: string) => {
  const config = access.login(login, pass);

  return Connection.useApiResult(...config);
};
