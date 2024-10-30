import React from 'react';

const PostForm = ({ newPost, handleInputChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Título:</label>
      <input
        type="text"
        name="title"
        value={newPost.title}
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <label>Contenido:</label>
      <textarea
        name="body"
        value={newPost.body}
        onChange={handleInputChange}
        required
      />
    </div>
    <button type="submit">Agregar Post</button>
  </form>
);

export default PostForm;
