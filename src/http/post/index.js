import { getJwtToken } from "../../lib/auth";

export async function postSignup({
  userName,
  userEmail,
  userPassword,
  userLocation,
}) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/authenticate/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, userEmail, userPassword, userLocation }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    const error = new Error("An Error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }

  const responseData = await response.json();
  const token = responseData.token;
  localStorage.setItem("token", token);
  return responseData;
}

export async function postLogin({ userEmail, userPassword }) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/authenticate/signin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail, userPassword }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error("An Error occurred while Loging in.");
    error.code = response.status;
    error.info = errorData;

    throw error;
  }
  const responseData = await response.json();
  const token = responseData.token;
  localStorage.setItem("token", token);
  return responseData;
}

export async function postEducation({
  schoolName,
  secondarySchoolName,
  collegeName,
  degree,
  fieldOfStudy,
}) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/education/education`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        schoolName,
        secondarySchoolName,
        collegeName,
        degree,
        fieldOfStudy,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error("An Error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  return response.json();
}

export async function postExperience({
  companyName,
  title,
  location,
  startDate,
  endDate,
}) {
  // const reversedStartDate = startDate.split("-").reverse().join("-");
  // const reversedEndDate = endDate.split("-").reverse().join("-");
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/experiences/experience`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        experienceId: "507f191e810c19729de860ea",
        companyName,
        title,
        location,
        startDate,
        endDate,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error("An Error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }
  return response.json();
}

export async function postSkills({ name }) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/skills/skill`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error("An Error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;
    throw error;
  }
  return response.json();
}

export async function postOrgSignIn({
  organizationName,
  organizationEmail,
  organizationPassword,
  organizationPhoneNumber,
}) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/organization/authenticate/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        organizationName,
        organizationEmail,
        organizationPassword,
        organizationPhoneNumber,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error("An Error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  return response.json();
}

export async function postOrgProfileForm({
  organizationIndustry,
  organizationDescription,
  organizationLocation,
}) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/organization/profiles/profile`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        organizationIndustry,
        organizationDescription,
        organizationLocation,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error("An Error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  return response.json();
}

export async function postAddRole({ resume }) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/resumes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resume,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error("An Error occurred while signing up.");
    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  return response.json();
}

export async function verifyUsers({ signal }) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/verify-user`,
    {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
      signal,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error("An Error occurred while verifying the user.");
    error.code = response.status;
    error.info = errorData;

    throw error;
  }

  return response.json();
}
