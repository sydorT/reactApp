const apiBaseUrl = "//ec2-54-161-136-170.compute-1.amazonaws.com:8082";

const login = async (data) => {
  const res = await fetch(`${apiBaseUrl}/v1/api/user/login`, {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const response = await res.json();
  return response;
};

const register = async (data) => {
  const res = await fetch(`${apiBaseUrl}/v1/api/user/registration`, {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const response = await res.json();
  return { res, response };
};

export { login, register };
