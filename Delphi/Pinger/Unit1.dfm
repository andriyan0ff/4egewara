object Form1: TForm1
  Left = 0
  Top = 0
  AutoSize = True
  Caption = #1055#1080#1085#1075#1077#1088' '#1096#1084#1080#1085#1075#1077#1088' '#1073#1088#1072#1079#1077#1088#1089' '#1090#1080#1084
  ClientHeight = 81
  ClientWidth = 417
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -12
  Font.Name = 'Segoe UI'
  Font.Style = []
  PixelsPerInch = 96
  TextHeight = 15
  object Bevel1: TBevel
    Left = 0
    Top = 0
    Width = 417
    Height = 81
  end
  object Label1: TLabel
    Left = 16
    Top = 0
    Width = 78
    Height = 15
    Caption = #1059#1056#1051' '#1089#1077#1088#1074#1072#1085#1090#1072
  end
  object Label2: TLabel
    Left = 16
    Top = 53
    Width = 78
    Height = 15
    Caption = #1048#1090#1077#1088#1074#1072#1083' ('#1089#1077#1082')'
  end
  object Url: TEdit
    Left = 16
    Top = 16
    Width = 385
    Height = 23
    TabOrder = 0
    OnChange = UrlChange
  end
  object interval: TEdit
    Left = 100
    Top = 45
    Width = 49
    Height = 23
    TabOrder = 1
    Text = '1'
  end
  object Start: TButton
    Left = 232
    Top = 45
    Width = 75
    Height = 25
    Caption = #1055#1080#1085#1075#1091#1077#1084
    Enabled = False
    TabOrder = 2
    OnClick = StartClick
  end
  object Stop: TButton
    Left = 334
    Top = 45
    Width = 75
    Height = 25
    Caption = #1061#1072#1088#1086#1096
    Enabled = False
    TabOrder = 3
    OnClick = StopClick
  end
  object Memo1: TMemo
    Left = 261
    Top = 8
    Width = 20
    Height = 27
    Lines.Strings = (
      'M'
      'e'
      'm'
      'o1')
    TabOrder = 4
    Visible = False
  end
  object NetHTTPClient1: TNetHTTPClient
    UserAgent = 'Embarcadero URI Client/1.0'
    Left = 168
  end
  object Timer1: TTimer
    Enabled = False
    OnTimer = Timer1Timer
    Left = 104
  end
end
