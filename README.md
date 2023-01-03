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
- If you are using `yarn` consider deleting `package-lock.json` first to avoid resolution inconsistencies caused by unsynchronized lock files.

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

The project is using vite. Sometimes, using VPNs cause problems to view `localhost`. If there is a problem with that, consider adding `--host` in `package.json` run command:

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
