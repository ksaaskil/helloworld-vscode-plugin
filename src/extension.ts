import * as vscode from "vscode"; // tslint:disable-line:no-implicit-dependencies

const documentLanguageHoverProvider: vscode.HoverProvider = {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ) {
    const text = `This is **${document.languageId}**.`;
    return {
      contents: [text],
    };
  },
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("Extension active!");

  // The commandId parameter must match the command field in package.json
  const helloCmdDisposable = vscode.commands.registerCommand(
    "kimmo.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello VS Code!");
    }
  );

  const pantsOnFireCmdDisposable = vscode.commands.registerCommand(
    "kimmo.pantsOnFire",
    () => {
      vscode.window.showWarningMessage("Your pants are on fire!");
    }
  );

  const docLanguageHoverDisposable = vscode.languages.registerHoverProvider(
    ["javascript", "typescript"],
    documentLanguageHoverProvider
  );

  context.subscriptions.push(
    helloCmdDisposable,
    pantsOnFireCmdDisposable,
    docLanguageHoverDisposable
  );
}

// this method is called when extension is deactivated
export function deactivate() {}
