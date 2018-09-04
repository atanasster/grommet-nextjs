import moment from 'moment';

export const timeFormat = 'MM/DD/YYYY HH:mm';
export const dateFormat = 'MM/DD/YYYY';

export const rndRange = (start = -100, stop = 100) => {
  const low = Math.ceil(start);
  const high = Math.floor(stop);
  return Math.floor(Math.random() * ((high - low) + 1)) + low;
};


export const rndRangeFloat = (start = -100, stop = 100) => (
  (Math.random() * (stop - start)) + start
);


export const daysAfter = (days = 0) => moment().add(days, 'd').toDate();

export const daysAfterStr = days => moment().add(days, 'd').format(timeFormat);

export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const rndDataset = (start, stop) => (
  labels.map(() => rndRange(start, stop))
);

export const rndDataset2d = (start, stop) => (
  labels.map(() => ({ x: rndRange(start, stop), y: rndRange(start, stop) }))
);

export const rndTimeSerie = (days = 150, startValue = 120) => {
  const startData = moment().subtract(days, 'd');
  const data = [];
  let lastValue = startValue;
  for (let i = 0; i < days; i += 1) {
    const newValue = rndRangeFloat(Math.max(0, (lastValue - (lastValue * 0.05))),
      Math.max(0, (lastValue + (lastValue * 0.05))));
    data.push({
      t: startData.add(1, 'd').format(dateFormat),
      y: newValue,
    });
    lastValue = newValue;
  }

  return data;
};


export const rndDatasets = (count = 2, props = {}, boundedRandom = false) => {
  const datasets = [];
  for (let i = 0; i < count; i += 1) {
    const rest = Array.isArray(props) ? props[i] : props;
    const start = boundedRandom ? (100 - ((i + 1) * 10)) : undefined;
    const stop = boundedRandom ? (100 - ((i) * 10)) : undefined;
    datasets.push({
      label: `Dataset ${i + 1}`,
      data: rndDataset(start, stop),
      ...rest,
    });
  }
  return {
    labels,
    datasets,
  };
};

export const rndDatasets2d = (count = 2, props = {}, boundedRandom = false) => {
  const datasets = [];
  for (let i = 0; i < count; i += 1) {
    const rest = Array.isArray(props) ? props[i] : props;
    const start = boundedRandom ? (100 - ((i + 1) * 10)) : undefined;
    const stop = boundedRandom ? (100 - ((i) * 10)) : undefined;
    datasets.push({
      label: `Dataset ${i + 1}`,
      data: rndDataset2d(start, stop),
      ...rest,
    });
  }
  return {
    labels,
    datasets,
  };
};

