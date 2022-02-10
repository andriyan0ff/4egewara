unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.ExtCtrls,
  System.Net.URLClient, System.Net.HttpClient, System.Net.HttpClientComponent;

type
  TForm1 = class(TForm)
    Bevel1: TBevel;
    Url: TEdit;
    Label1: TLabel;
    interval: TEdit;
    Label2: TLabel;
    Start: TButton;
    Stop: TButton;
    NetHTTPClient1: TNetHTTPClient;
    Timer1: TTimer;
    Memo1: TMemo;
    procedure StartClick(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure StopClick(Sender: TObject);
    procedure UrlChange(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.StartClick(Sender: TObject);
begin
  Timer1.Interval := StrToInt(interval.Text) * 1000;
  Timer1.Enabled := True;
  Url.Enabled := False;
  Interval.Enabled := False;
end;

procedure TForm1.StopClick(Sender: TObject);
begin
  Timer1.Enabled := False;
  Start.Enabled := True;
  Stop.Enabled := False;
  Url.Enabled := True;
  Interval.Enabled := True;
end;

procedure TForm1.UrlChange(Sender: TObject);
begin
  if Url.Text <> '' then
    Start.Enabled := true;
end;

procedure TForm1.Timer1Timer(Sender: TObject);
var responce : string;
begin
  Start.Enabled := False;
  Stop.Enabled := True;
  Responce := NetHTTPClient1.Get(''+Url.Text+'/api/v1/ping').ContentAsString;
  Form1.Caption := Form1.Caption +'   Пингуем сервант';
  if Responce <> 'pong;' then
    begin
      Timer1.Enabled := False;
      ShowMessage('Сервант упал!!!');
      Stop.Enabled := False;
      Start.Enabled := True;
    end;

end;

end.
