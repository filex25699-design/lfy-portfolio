$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$incoming = Join-Path $root "_incoming"

function Copy-Asset {
  param(
    [Parameter(Mandatory = $true)][string]$Source,
    [Parameter(Mandatory = $true)][string]$Destination
  )

  $target = Join-Path $root $Destination
  $targetDir = Split-Path -Parent $target

  if (!(Test-Path -LiteralPath $Source)) {
    Write-Warning "Missing source: $Source"
    return
  }

  if (!(Test-Path -LiteralPath $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir | Out-Null
  }

  Copy-Item -LiteralPath $Source -Destination $target -Force
  Write-Host "Copied -> $Destination"
}

# Profile
Copy-Asset "$incoming\tx1.png" "public\images\profile\avatar.png"
Copy-Asset "$incoming\征件.jpg" "private\profile\real-photo.jpg"

# Contact QR codes
Copy-Asset "$incoming\mmqrcode1791518310362.png" "public\images\contact\wechat-qr.png"
Copy-Asset "$incoming\49697eca18645d5954478f066bd95aa9.png" "public\images\contact\douyin-qr.png"

# Resume and creative PDFs
Copy-Asset "$incoming\26_3_李锋- 游戏策划-1年经验.pdf" "public\resume\li-feng-game-designer.pdf"
Copy-Asset "$incoming\逢源诗集_202409161210_17833.pdf" "public\creative\fengyuan-poems.pdf"

# Creative images
Copy-Asset "$incoming\IMG_20250128_165502.jpg" "public\images\creative\calligraphy-01.jpg"
Copy-Asset "$incoming\mmexport1759666666664.jpg" "public\images\creative\calligraphy-02.jpg"
Copy-Asset "$incoming\wx_camera_1758197622908.jpg" "public\images\creative\calligraphy-03.jpg"
Copy-Asset "$incoming\wx_camera_1758360512897.jpg" "public\images\creative\calligraphy-04.jpg"
Copy-Asset "$incoming\IMG_20250922_165957_edit_121362188425317.jpg" "public\images\creative\calligraphy-06.jpg"
Copy-Asset "$incoming\IMG_20250907_213115.jpg" "public\images\creative\calligraphy-07.jpg"
Copy-Asset "$incoming\wx_camera_1677208607829.jpg" "public\images\creative\calligraphy-08.jpg"
Copy-Asset "$incoming\wx_camera_1680860879972.jpg" "public\images\creative\calligraphy-09.jpg"
Copy-Asset "$incoming\IMG_20230719_172639.jpg" "public\images\creative\badminton-01.jpg"
Copy-Asset "$incoming\IMG_20230410_113833.jpg" "public\images\creative\badminton-02.jpg"
Copy-Asset "$incoming\mmexport1738584020339.jpg" "public\images\creative\billiards-01.jpg"
Copy-Asset "$incoming\Screenshot_20261009_131347_com_tencent_mm_Launche.png" "public\images\creative\music-cover.png"
Copy-Asset "$incoming\mmexport1738055296068.jpg" "public\images\creative\poems-cover.jpg"

Write-Host ""
Write-Host "Done. Refresh http://localhost:4321/creative/ and http://localhost:4321/contact/"
