# Front-end Coding Challenge (Vue3 + Vite)

To run the application first clone the repo:

```bash
git clone https://github.com/manimirjavadi/mhw-challenge.git
```

Then, change directory to project file and install the packages:

Changing directory with:
```bash
cd mhw-challenge
```

Now, install the packages:
```bash
# With npm
npm install

# With yarn
yarn install
```

After installing packages, you can run the project with these commands:

```bash
# With npm
npm run dev

# With yarn
yarn dev
```

## Building

Use the commands below:

```bash
# With npm
npm run build

# With yarn
yarn build
```

## Note

The project is using vite and the host running in dev mode will open network. To disable it, remove the `--host` in `package.json`:

```javascript
{
    //...
    "scripts": {
    "dev": "vite --host", // This line
    "build": "vite build",
    "preview": "vite preview"
  },
    //...
}
```
