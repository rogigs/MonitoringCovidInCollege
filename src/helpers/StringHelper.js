const StringHelper = {
  formatStringToTimestamp: (string) => {
    const arr = Array.from(string);

    return new Date(
      `${arr[0]}${arr[1]}${arr[2]}${arr[3]}`,
      `${arr[5]}${arr[6]}`,
      `${arr[8]}${arr[9]}`
    );
  },
};

export default StringHelper;
