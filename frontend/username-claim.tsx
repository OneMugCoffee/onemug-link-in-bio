import { useState } from 'react';

export default function UsernameClaim() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: send username to backend to save + verify ownership
    console.log(`Claimed username: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose your OneMug username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <button type="submit">Claim Username</button>
    </form>
  );
}
