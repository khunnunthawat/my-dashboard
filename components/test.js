const handleClear = function () {
    setListAllWidgets([]);
  };

  let clearBtn = (
    <Button doClick={handleClear} check={check} disabled={!disabled}>
      <BiBomb className={iconSty} /> Clear all
    </Button>
  );

  if (listAllWidgets.length > 0) {
    clearBtn = (
      <Button doClick={handleClear} check={!check} disabled={!disabled}>
        <BiBomb className={iconSty} /> Clear all
      </Button>
    );
  }