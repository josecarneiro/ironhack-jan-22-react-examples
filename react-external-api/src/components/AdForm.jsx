const AdForm = (props) => {
  return (
    <form>
      <label htmlFor="title-input">Advertisement Title</label>
      <input
        id="title-input"
        placeholder="A short title..."
        value={props.ad.title}
        onChange={(event) => {
          const title = event.target.value;
          props.onAdChange({ ...props.ad, title });
        }}
      />

      <label htmlFor="description-input">Advertisement Description</label>
      <textarea
        id="description-input"
        placeholder="A complete description..."
        value={props.ad.description}
        onChange={(event) => {
          const description = event.target.value;
          props.onAdChange({ ...props.ad, description });
        }}
      />
    </form>
  );
};

export default AdForm;
