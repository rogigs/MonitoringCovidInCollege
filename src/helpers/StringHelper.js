const StringHelper = {
  formatStringToTimestamp: (string) => {
    const arr = Array.from(string);

    return new Date(
      `${arr[0]}${arr[1]}${arr[2]}${arr[3]}`,
      `${arr[5]}${arr[6]}`,
      `${arr[8]}${arr[9]}`
    );
  },
  formatTimestampToDateReadble: (timestamp) => {
    const date = new Date(parseFloat(timestamp));

    return `${date.getMonth() + 1}/${date.getDate()}/${date.getUTCFullYear()}`;
  },
};

export default StringHelper;
