// ScribbleNotes.js
import React, { useState } from 'react';

const ScribbleNotes = () => {
  const [notes, setNotes] = useState('');

  const handleClearNotes = () => {
    setNotes('');
  };

  return (
    <div>
    <div className="card m-4 " style={{width: "18rem", height: "18rem"}} >
      <div className="card-body">
        <h5 className="card-title text-success">Scribble Notes</h5>
        <textarea
          className="form-control mb-3 border border-4"
          rows="5"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write your notes here..."
        />
        <button className="btn btn-sm btn-danger" onClick={handleClearNotes}>
          Clear Notes
        </button>
      </div>
    </div>
    </div>
  );
};

export default ScribbleNotes;
