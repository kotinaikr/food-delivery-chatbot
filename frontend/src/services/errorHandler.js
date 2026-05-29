const STATUS_MESSAGES = {
  400: "Bad request. Please check your input.",
  401: "Unauthorized. Please sign in again.",
  403: "You do not have permission to perform this action.",
  404: "The requested resource was not found.",
  408: "Request timed out. Please try again.",
  409: "Conflict. The resource already exists or was modified.",
  422: "Validation failed. Please check your input.",
  429: "Too many requests. Please wait and try again.",
  500: "Internal server error. Please try again later.",
  502: "Bad gateway. The server is temporarily unavailable.",
  503: "Service unavailable. Please try again later.",
  504: "Gateway timeout. Please try again later.",
};

const formatValidationDetail = (detail) => {
  if (typeof detail === "string") {
    return detail;
  }

  if (Array.isArray(detail)) {
    return detail
      .map((item) => {
        if (typeof item === "string") {
          return item;
        }

        if (item?.msg) {
          const field = Array.isArray(item.loc)
            ? item.loc.filter((part) => part !== "body").join(".")
            : "";
          return field ? `${field}: ${item.msg}` : item.msg;
        }

        return item?.message || JSON.stringify(item);
      })
      .join(", ");
  }

  if (typeof detail === "object" && detail !== null) {
    return detail.message || detail.msg || JSON.stringify(detail);
  }

  return String(detail);
};

const parseResponseData = (data) => {
  if (!data) {
    return null;
  }

  if (typeof data === "string") {
    return data.trim() || null;
  }

  if (typeof Blob !== "undefined" && data instanceof Blob) {
    return null;
  }

  if (typeof data === "object") {
    if (data.detail !== undefined) {
      return formatValidationDetail(data.detail);
    }

    if (data.message) {
      return data.message;
    }

    if (data.error) {
      return typeof data.error === "string" ? data.error : JSON.stringify(data.error);
    }

    if (data.errors) {
      return formatValidationDetail(data.errors);
    }
  }

  return null;
};

export const getApiErrorMessage = (error) => {
  if (!error) {
    return "Something went wrong";
  }

  if (error.code === "ERR_CANCELED" || error.name === "CanceledError") {
    return null;
  }

  if (error.code === "ECONNABORTED") {
    return "Request timed out. Please try again.";
  }

  if (error.response) {
    const { status, data } = error.response;
    const parsedMessage = parseResponseData(data);

    if (parsedMessage) {
      return parsedMessage;
    }

    return STATUS_MESSAGES[status] || `Request failed (${status})`;
  }

  if (error.request) {
    return "Network error. Please check your connection and try again.";
  }

  return error.message || "Something went wrong";
};
