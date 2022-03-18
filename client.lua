local sound = true

exports("showInteraction", function(text, type)
    if not type then type = "info" end
    SendNUIMessage({
        type = "open",
        text = text,
        color = type,
        sound = sound
    })
end)

exports("hideInteraction", function()
    SendNUIMessage({
        type = "close"
    })
end)