function Profile({ person, size, isSepia, thickBorder }) {
  return (

    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>


  );
}
