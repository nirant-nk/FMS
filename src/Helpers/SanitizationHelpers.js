export const sanitizeInputChar = input => {
  if (input) {
    return input.replace(/[^a-zA-Z\s]/g, ''); // Remove characters other than Marathi characters, a-z, A-Z, and space
  }
};

export const sanitizeInputNumber = input => {
  if (input) {
    return input.replace(/\D/g, ''); // Remove non-digit characters
  }
};

export const sanitizeInputFlootingNumber = input => {
  if (input) {
    return input.replace(/[^\d.]/g, ''); // Remove non-digit and non-dot characters
  }
};

export const sanitizeInputEmail = input => {
  if (input) {
    return input.replace(/[^a-z0-9\s.-@]/g, '');
  }
};

export const sanitizeInputLocation = input => {
  if (input) {
    return input.replace(/[^\u0900-\u0971a-zA-Z0-9\s.-]/g, ''); // Remove characters other than allowed characters
  }
};

export const sanitizeInputCvarient = input => {
  if (input) {
    return input.replace(/[^\u0900-\u0971a-zA-Z0-9\s.\-()_]/g, ''); // Remove characters other than allowed characters
  }
};
