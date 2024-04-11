export async function getUser() {
  const token = localStorage.getItem("token");
  const response = await fetch(`` /* url here */, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const error = new Error("An error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }

  return response.json();
}

export async function getSkill() {
  const token = localStorage.getItem("token");
  const response = await fetch(`` /* url here */, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const error = new Error("An error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }

  return response.json();
}

export async function getExperience() {
  const token = localStorage.getItem("token");
  const response = await fetch(`` /* url here */, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const error = new Error("An error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }

  return response.json();
}

export async function getEducation() {
  const token = localStorage.getItem("token");
  const response = await fetch(`` /* url here */, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const error = new Error("An error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }

  return response.json();
}

// export async function getExperience() {
//   const token = localStorage.getItem("token");
//   const response = await fetch(`` /* url here */, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       token: token,
//     },
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     const error = new Error("An error occurred while signing up.");
//     error.code = response.status;
//     error.info = errorData;
//     throw error;
//   }

//   return response.json();
// }

export async function getComment(postId) {
  const token = localStorage.getItem("token");
  const response = await fetch(`` /* url here */, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ postId }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    const error = new Error("An error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }

  return response.json();
}

export async function getJob() {
  const token = localStorage.getItem("token");
  const response = await fetch(`` /* url here */, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const error = new Error("An error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }

  return response.json();
}

// post get function is pending
// connection get function is pending
// job search query get function is pending 