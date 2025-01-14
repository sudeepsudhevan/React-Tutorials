## How to use Context Api in REACT

### 1) CREATE A CONTEXT
In React, createContext is typically used to create a context object, which allows you to share state and other values between components without having to pass props down manually at every level.
```jsx
const PostContext = createContext();
```

### // 2) PROVIDE VALUE TO THE CHILD COMPONENTS
```jsx
return (    
    <PostContext.Provider value={{
      posts: searchedPosts,
      onClearPosts: handleClearPosts,
      onAddPost: handleAddPost,
      searchQuery,
      setSearchQuery
      }}>

      <section>
        <Button isFakeDark={isFakeDark} setIsFakeDark={setIsFakeDark} />
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostContext.Provider>
  );
}
```
### 3) CONSUMING CONTEXT VALUES
```jsx
function Header() {
  // 3) CONSUMING CONTEXT VALUES
  const {onClearPosts} =useContext(PostContext);
  
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

function SearchPosts() {

  const {searchQuery, setSearchQuery} =useContext(PostContext);

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

```
