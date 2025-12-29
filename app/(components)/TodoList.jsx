"use client";

import React, { useEffect, useState, useRef } from "react";
import { Plus, Trash2, Check, Edit, Pin, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoListKeep() {
  const [todos, setTodos] = useState([]);
  const [openComposer, setOpenComposer] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("bg-white");
  const [editingId, setEditingId] = useState(null);
  const [pin, setPin] = useState("");
  const [showPinPrompt, setShowPinPrompt] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [todoItems, setTodoItems] = useState([""]);
  const composerRef = useRef(null);

  const HASH_PIN = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4";

  const COLOR_OPTIONS = [
    "bg-white",
    "bg-yellow-100",
    "bg-pink-100",
    "bg-amber-100",
    "bg-lime-100",
    "bg-cyan-100",
    "bg-violet-100",
    "bg-rose-100",
  ];
  async function hashPin(pin) {
    const encoder = new TextEncoder();
    const data = encoder.encode(pin);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        const normalized = data.map((d) => ({
          id: d.id ?? Date.now() + Math.random(),
          title: d.title ?? d.task ?? "",
          note: d.note ?? "",
          date: d.date ?? null,
          color: d.color ?? "bg-white",
          pinned: d.pinned ?? false,
          completed: d.completed ?? false,
          todoItems: d.todoItems ?? [],
        }));
        setTodos(normalized);
      })
      .catch(() => setTodos([]));
  }, []);

  // ✅ Save to file using POST request
  const persist = async (next) => {
    setTodos(next);
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next, null, 2),
    });
  };

  const openNew = () => {
    verifyPin(() => {
      setEditingId(null);
      setTitle("");
      setNote("");
      setDate("");
      setColor("bg-white");
      setTodoItems([""]);
      setOpenComposer(true);
      setTimeout(() => composerRef.current?.focus(), 80);
    });
  };

  const verifyPin = (action) => {
    setPendingAction(() => action);
    setShowPinPrompt(true);
    setPin("");
  };

  const handlePinSubmit = async () => {
    const enteredHash = await hashPin(pin);
    if (enteredHash === HASH_PIN) {
      setShowPinPrompt(false);
      if (pendingAction) pendingAction();
    } else {
      alert("Incorrect PIN!");
    }
    setPin("");
  };

  const saveTodo = () => {
    if (!title && !note && todoItems.every((item) => !item.trim())) return;

    const filteredTodoItems = todoItems
      .filter((item) => item.trim() !== "")
      .map((text) => ({ text, completed: false }));

    let updated;
    if (editingId) {
      updated = todos.map((t) =>
        t.id === editingId
          ? { ...t, title, note, date: date || null, color, todoItems: filteredTodoItems }
          : t
      );
    } else {
      const newTodo = {
        id: Date.now() + Math.random(),
        title,
        note,
        date: date || null,
        color,
        pinned: false,
        completed: false,
        todoItems: filteredTodoItems,
      };
      updated = [newTodo, ...todos];
    }

    persist(updated);
    setOpenComposer(false);
    setEditingId(null);
  };

  const cancelCompose = () => {
    setOpenComposer(false);
    setEditingId(null);
  };

  const toggleComplete = (id) => {
    verifyPin(() => {
      const updated = todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      persist(updated);
    });
  };

  const remove = (id) => {
    verifyPin(() => {
      const updated = todos.filter((t) => t.id !== id);
      persist(updated);
    });
  };

  const startEdit = (t) => {
    verifyPin(() => {
      setEditingId(t.id);
      setTitle(t.title);
      setNote(t.note);
      setDate(t.date ?? "");
      setColor(t.color ?? "bg-white");
      setTodoItems(
        t.todoItems?.length > 0
          ? t.todoItems.map((item) => (typeof item === "string" ? item : item.text))
          : [""]
      );
      setOpenComposer(true);
      setTimeout(() => composerRef.current?.focus(), 80);
    });
  };

  const togglePin = (id) => {
    verifyPin(() => {
      const updated = todos.map((t) =>
        t.id === id ? { ...t, pinned: !t.pinned } : t
      );
      persist(sortPinned(updated));
    });
  };

  const toggleTodoItem = (todoId, itemIndex) => {
    const updated = todos.map((todo) => {
      if (todo.id === todoId && todo.todoItems) {
        const updatedItems = todo.todoItems.map((item, idx) =>
          idx === itemIndex
            ? { ...item, completed: !item.completed }
            : item
        );
        return { ...todo, todoItems: updatedItems };
      }
      return todo;
    });
    persist(updated);
  };

  const sortPinned = (list) =>
    [...list].sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

  const addTodoItem = () => setTodoItems([...todoItems, ""]);

  const updateTodoItem = (index, value) => {
    const updated = [...todoItems];
    updated[index] = value;
    setTodoItems(updated);
  };

  const removeTodoItem = (index) => {
    if (todoItems.length > 1) {
      const updated = todoItems.filter((_, i) => i !== index);
      setTodoItems(updated);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Tomorrow";
    if (diffDays <= 7) return `${diffDays - 1} days left`;

    return date.toLocaleDateString();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Keep-like Notes
      </h3>

      {/* PIN Prompt */}
      {showPinPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Enter PIN to continue
            </h3>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 text-gray-900"
              onKeyPress={(e) => e.key === "Enter" && handlePinSubmit()}
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setShowPinPrompt(false);
                  setPin("");
                }}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handlePinSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Composer */}
      <div className="mb-6">
        <div
          className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg shadow-md bg-white dark:bg-gray-800 cursor-pointer"
          onClick={openNew}
        /* role="button" removed to fix hydration error */
        >
          <input
            suppressHydrationWarning
            className="flex-1 bg-transparent outline-none placeholder:text-gray-500 text-gray-900 dark:text-white"
            placeholder="Take a note..."
            readOnly
          />
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                openNew();
              }}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {openComposer && (
          <div className="mt-3 p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <div className={`p-3 rounded ${color} transition-colors`}>
              <input
                ref={composerRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full text-lg font-semibold bg-transparent outline-none mb-2 text-gray-900 placeholder-gray-500"
              />

              {/* Todo Items */}
              <div className="mb-3">
                {todoItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 border border-gray-300 rounded flex-shrink-0"></div>
                    <input
                      value={item}
                      onChange={(e) => updateTodoItem(index, e.target.value)}
                      placeholder={`Todo item ${index + 1}`}
                      className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                    />
                    {todoItems.length > 1 && (
                      <button
                        onClick={() => removeTodoItem(index)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={addTodoItem}
                  className="text-sm text-blue-600 hover:text-blue-800 mt-1 flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" /> Add todo item
                </button>
              </div>

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Additional notes..."
                rows={3}
                className="w-full bg-transparent outline-none resize-none text-gray-700 placeholder-gray-400"
              />

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-2 py-1 rounded border border-gray-200 bg-transparent text-gray-700"
                  />

                  <div className="flex items-center gap-1">
                    {COLOR_OPTIONS.map((c) => (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        className={`w-6 h-6 rounded-sm border ${c} ${color === c ? "ring-2 ring-offset-1 ring-gray-400" : ""
                          }`}
                        aria-label={c}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={saveTodo}
                    className="px-3 py-1 rounded-md bg-sky-600 text-white shadow-sm hover:brightness-90"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelCompose}
                    className="px-3 py-1 rounded-md bg-transparent border text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {todos.length === 0 && (
          <div className="text-center text-gray-500 col-span-full">
            No notes yet — create one with the + button
          </div>
        )}

        {[...todos] // Create a copy before sorting to avoid mutating state during render
          .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0)) // latest first
          .map((t) => (
            <div
              key={t.id}
              className={`p-4 rounded shadow-sm ${t.color} relative border`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex-1">
                    <div
                      className={`font-semibold text-sm mb-2 ${t.completed
                        ? "line-through text-gray-500"
                        : "text-gray-900"
                        }`}
                    >
                      {t.title}
                    </div>

                    {/* Todo Items Display */}
                    {t.todoItems?.length > 0 && (
                      <div className="space-y-1 mb-2">
                        {t.todoItems.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 border rounded flex-shrink-0 flex items-center justify-center ${item.completed
                                ? "bg-green-500 border-green-500 text-white"
                                : "border-gray-300"
                                }`}
                              onClick={() => toggleTodoItem(t.id, index)}
                            >
                              {item.completed && <Check className="w-3 h-3" />}
                            </div>
                            <span
                              className={`text-xs ${item.completed
                                ? "line-through text-gray-500"
                                : "text-gray-700"
                                }`}
                            >
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div
                      className={`text-sm ${t.completed
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                        }`}
                    >
                      {t.note}
                    </div>

                    {t.date && (
                      <div className="mt-2 text-xs text-gray-500 font-medium">
                        📅 {formatDate(t.date)}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => togglePin(t.id)}
                    className="p-1 rounded hover:bg-white/60"
                  >
                    <Pin
                      className={`w-4 h-4 ${t.pinned ? "text-yellow-600" : "text-gray-500"
                        }`}
                    />
                  </button>
                  <button
                    onClick={() => toggleComplete(t.id)}
                    className="p-1 rounded hover:bg-white/60"
                  >
                    <Check
                      className={`w-4 h-4 ${t.completed ? "text-green-600" : "text-gray-500"
                        }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 mt-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => startEdit(t)}
                    className="text-xs px-2 py-1 rounded hover:bg-white/70 text-gray-700"
                  >
                    <Edit className="w-4 h-4 inline-block mr-1" /> Edit
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => remove(t.id)}
                    className="text-xs px-2 py-1 rounded hover:bg-white/70 flex items-center gap-1 text-gray-700"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={openNew}
        aria-label="Add note"
        className="fixed right-8 bottom-8 z-40 flex items-center gap-3 px-4 py-3 rounded-full shadow-2xl bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:scale-105 transition-transform"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden md:inline-block font-medium">Take a note</span>
      </button>
    </div>
  );
}
